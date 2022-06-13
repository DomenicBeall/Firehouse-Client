const axios = require('axios');

const HouseService = {
  getHousesByUserId: async (userId: string) => {
    const userData = await axios.get(`/user/${userId}`);
    console.log(userData);
    
    return userData.data?.houses || [];
  },
  getHouseById: async (houseId: string) => {
    const houseData = await axios.get(`/house/${houseId}`);

    return houseData;
  },
  createHouse: async (housename: string, creatorId: string) => {
    var postbody = {
      name: housename,
      creatorId: creatorId
    };

    const house = await axios.post(`/house/`, postbody);
    
    return house;
  },
  updateHouseById: (id: string, housename: string) => {
    /*
    var updateIndex = -1;

    allHouses.find((house, index) => {
      if (house.id === id) {
        updateIndex = index;
        return true;
      } else {
        return false;
      }
    });

    allHouses[updateIndex].name = housename;

    return allHouses[updateIndex];
    */
  },
  deleteHouseById: async (id: String) => {
    await axios.delete(`/house/${id}`);
  },
  joinHouse: async (userId: string, houseId: string) => {
    var postbody = {
      houseId,
      userId
    };

    await axios.post(`/user/`, postbody);
  }
};

export default HouseService;
