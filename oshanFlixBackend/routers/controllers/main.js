import { getTVSeriesData , filterDataByIdAndType } from "../modules/firebase.js";

const main = {
  indexRoute: async (req, res) => {
    const { offset, limit } = req.query;

    try {
      const tvSeriesData = await getTVSeriesData(offset, limit);
      res.json(tvSeriesData);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getDetails: async (req, res) => {
    const { id , type } = req.params;
    try {
      
      const filteredData = await filterDataByIdAndType(id, type);
      res.json(filteredData);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

export default main;
