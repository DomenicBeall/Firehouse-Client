const { v4: uuidv4 } = require('uuid');

type House = {
  id: string;
  name: string;
  memberIds: string[];
  adminId: string;
};

var allHouses: House[] = [];

const HouseService = {
  getHousesByUserId: (userId: string) => {
    return allHouses.filter((house) => {
      return house.memberIds.includes(userId);
    });
  },
  getHouseById: (houseId: string) => {
    return allHouses.find((house) => {
      return house.id === houseId;
    });
  },
  createHouse: (housename: string, adminId: string) => {
    var house: House = {
      id: uuidv4(),
      name: housename,
      memberIds: [adminId], // Populate user ids with fake user
      adminId: adminId
    };

    allHouses.push(house);

    return house;
  },
  updateHouseById: (id: string, housename: string) => {
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
  },
  deleteHouseById: (id: String) => {
    var deleteIndex = -1;

    allHouses.find((house, index) => {
      if (house.id === id) {
        deleteIndex = index;
        return true;
      } else {
        return false;
      }
    });

    if (deleteIndex !== -1) {
      allHouses = allHouses.filter((house) => {
        return house !== allHouses[deleteIndex];
      });
      return true;
    } else {
      return false;
    }
  },
  joinHouse: (userId: string, houseId: string) => {
    var index = allHouses.findIndex((house) => {
      return house.id === houseId;
    });
    
    // Check that the house exists
    if (index !== -1) {
      // Check the user isn't already in the house
      if (!allHouses[index].memberIds.includes(userId)) {
        allHouses[index].memberIds.push(userId);
      } else {
        console.error(`You are already a member of this house!`);
      }
    } else {
      console.error(`No house with ID ${houseId} found!`);
    }
  }
};

export default HouseService;
