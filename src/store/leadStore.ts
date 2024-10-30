import { create } from 'zustand';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../config/firebase';
import { LeadData } from '../types';

interface LeadStore {
  currentStep: number;
  leadData: Partial<LeadData>;
  setStep: (step: number) => void;
  updateLeadData: (data: Partial<LeadData>) => void;
  submitLead: () => Promise<void>;
}

export const useLeadStore = create<LeadStore>((set, get) => ({
  currentStep: 1,
  leadData: {},
  setStep: (step) => set({ currentStep: step }),
  updateLeadData: (data) =>
    set((state) => ({
      leadData: { ...state.leadData, ...data },
    })),
  submitLead: async () => {
    const { leadData } = get();
    
    try {
      // Upload images first
      const imageUrls = await Promise.all(
        (leadData.treeImages || []).map(async (file) => {
          const storageRef = ref(storage, `tree-images/${Date.now()}-${file.name}`);
          await uploadBytes(storageRef, file);
          return getDownloadURL(storageRef);
        })
      );

      // Create lead document in Firestore
      const leadRef = await addDoc(collection(db, 'leads'), {
        ...leadData,
        treeImages: imageUrls,
        createdAt: new Date().toISOString(),
        status: 'new'
      });

      // Clear form after successful submission
      set({ leadData: {}, currentStep: 1 });
      
      alert('Thank you! We will contact you soon.');
    } catch (error) {
      console.error('Error submitting lead:', error);
      alert('Sorry, there was an error submitting your request. Please try again.');
    }
  },
}));