import { defineStore } from 'pinia';

export const useCollectionStore = defineStore('collection', {
    state: () => {
        return {
            collection: [],
            user: {
                first_name: 'Andrew',
                last_name: 'Schmelyun',
                email: 'andrew@example.com'
            }
        }
    },
    getters: {
        userFullName: (state) => state.user.first_name + ' ' + state.user.last_name
    },
    actions: {
        addPlantToCollection(plant) {
            let existingPlantIndex = this.collection.findIndex(p => p.name === plant.name);
            if (existingPlantIndex > -1) {
                this.collection[existingPlantIndex].quantity += 1;
                return;
            }

            this.collection.push({
                name: plant.name,
                quantity: 1
            });
        },
        removePlantFromCollection(collectionIndex) {
            this.collection[collectionIndex].quantity -= 1;

            if (this.collection[collectionIndex].quantity === 0) {
                this.collection.splice(collectionIndex, 1);
            }
        }
    }
})