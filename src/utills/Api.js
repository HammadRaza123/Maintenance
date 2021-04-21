export const getDetails = async (page) => {
  try {
    const response = await fetch(
      `https://maintainance-bakend.herokuapp.com/v1/tasks/details?pagesize=10&page=${page}`,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDY1YTljYmI3OWU5OTA1Yjg3NTkxM2IiLCJpYXQiOjE2MTg5OTEzNzF9.RHOLufDGdloydyIDbKSS1wzdgpRm6h_7Ps6G6ogZ_sk',
        },
      },
    );
    const resultObject = await response.json();
    if (resultObject) {
      return {
        success: true,
        data: resultObject.tasks,
        count: Math.ceil(resultObject.count / 10),
      };
    }
  } catch (error) {
    console.log(error.message);
    return {
      success: false,
    };
  }
};
export const getVendors = async (type) => {
    try {
      const response = await fetch(
        `https://maintainance-bakend.herokuapp.com/v1/users?q&type=${type}`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDY1YTljYmI3OWU5OTA1Yjg3NTkxM2IiLCJpYXQiOjE2MTg5OTEzNzF9.RHOLufDGdloydyIDbKSS1wzdgpRm6h_7Ps6G6ogZ_sk',
          },
        },
      );
      const resultObject = await response.json();
      if (resultObject) {
        return {
          success: true,
          data: resultObject,
         
        };
      }
    } catch (error) {
      console.log(error.message);
      return {
        success: false,
      };
    }
  };
  export const getArea = async (type) => {
    try {
      const response = await fetch(
        `https://maintainance-bakend.herokuapp.com/v1/areas/details`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDY1YTljYmI3OWU5OTA1Yjg3NTkxM2IiLCJpYXQiOjE2MTg5OTEzNzF9.RHOLufDGdloydyIDbKSS1wzdgpRm6h_7Ps6G6ogZ_sk',
          },
        },
      );
      const resultObject = await response.json();
      if (resultObject) {
        return {
          success: true,
          data: resultObject,
         
        };
      }
    } catch (error) {
      console.log(error.message);
      return {
        success: false,
      };
    }
  };
  export const getRequestType = async (type) => {
    try {
      const response = await fetch(
        `https://maintainance-bakend.herokuapp.com/v1/request-types/details`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDY1YTljYmI3OWU5OTA1Yjg3NTkxM2IiLCJpYXQiOjE2MTg5OTEzNzF9.RHOLufDGdloydyIDbKSS1wzdgpRm6h_7Ps6G6ogZ_sk',
          },
        },
      );
      const resultObject = await response.json();
      if (resultObject) {
        return {
          success: true,
          data: resultObject,
         
        };
      }
    } catch (error) {
      console.log(error.message);
      return {
        success: false,
      };
    }
  };