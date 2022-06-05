const TEST_USER_ID = 'TestUser';

type House = {
  id: string;
  name: string;
  memberIds: string[];
};

var allHouses: House[] = [];

const HouseService = {
  getHousesByUserId: (userId: string) => {
    userId = TEST_USER_ID; // Debug so that user id is always the same

    return allHouses.filter((house) => {
      return house.memberIds.includes(userId);
    });
  },
  getHouseById: (houseId: string) => {
    return allHouses.find((house) => {
      return house.id === houseId;
    });
  },
  createHouse: (housename: string) => {
    var house: House = {
      id: 'Test',
      name: housename,
      memberIds: [TEST_USER_ID], // Populate user ids with fake user
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
};

export default HouseService;
