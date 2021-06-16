const country = require("../models/Country")
const dish = require("../models/Dish")

const newDish = async (req, res) =>{
    try{
        const recipeDish = await new dish (req.body)
        await recipeDish.save()
        return res.status(201).json({recipeDish})
    }catch(error){
        return res.status(500).json({error: error.message})
    }

const getallDishes = async(req, res) =>{
    try{
        const Dishes = await dish.find()
        return res.status(200).json({Dishes})
    }catch(error){
        return res.status(500).send(error.message)
    }
}
const getDishByID = async (req, res)=>{
    try{
        const {id} = req.params
        const Dishes = await dish.findById(id)
        if(Dishes){
            return res.status(200).json({Dishes})
    }
    return res.status(404).send('404')}
    }catch(error){
    return res.status(500).send(error.message)
}
const deleteDish = async (req, res) =>{
    try{
        const { id } = req.params;
        const erased = await dish.findByIdAndDelete(id)
        if(erased){
            return res.status(200).send('Dish Deleted')
        }
    }catch (error){
        return res.status(500).send(error.message)
    }
}

const newCountry = async (req, res) =>{
    try{
       const Country = await country.find() 
       return res.status(200).json({Country})
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}
const getcountryID = async (req, res) => {
	const { id } = req.params;
	try {
		const country = await Country.findById(id);

		if (country) {
			return res.status(200).json(country);
		}

		return res.status(404).send("not found");
	} catch (error) {
		return res.status(404).send("not found");
	}

    const deleteCountry = async (req, res) => {
        try {
          const { id } = req.params;
          const deleted = await country.findByIdAndDelete(id);
          if (deleted) {
            return res.status(200).send("Country Erased)
          }
        } catch (error) {
          return res.status(500).send(error.message);
        }
      }



}

// module.exports={
//     newDish()
//     getallDishes()
//     getDishByID()
//     deleteDish()
//     newCountry()
//     getcountryID()
//     deleteCountry()
// }