import mongoose, { disconnect } from "mongoose";
import MasterData from '../../models/masterDataModel.js'
import { v4 as uuidv4 } from 'uuid';
import { errorHandler } from "../../utils/error.js";

const dummyData = [



  // ----------- ODISHA (ROURKELA + OTHER CITIES) -----------
  { id: uuidv4(), district: "Rourkela", location: "sector-1 : nit main gate", type: "location" },
  { id: uuidv4(), district: "Rourkela", location: "chhend colony : nit square", type: "location" },
  { id: uuidv4(), district: "Rourkela", location: "udit nagar : market", type: "location" },
  { id: uuidv4(), district: "Rourkela", location: "civil township : daily market", type: "location" },
  { id: uuidv4(), district: "Rourkela", location: "basanti colony : igh hospital area", type: "location" },
  { id: uuidv4(), district: "Rourkela", location: "bondamunda : railway junction", type: "location" },
  { id: uuidv4(), district: "Rourkela", location: "vedvyas : bridge & temple", type: "location" },
  { id: uuidv4(), district: "Rourkela", location: "kalunga : industrial estate", type: "location" },
  { id: uuidv4(), district: "Rourkela", location: "kuarmunda : chowk", type: "location" },
  { id: uuidv4(), district: "Rourkela", location: "biramitrapur : bus stand", type: "location" },
  { id: uuidv4(), district: "Rourkela", location: "rajgangpur : main market", type: "location" },
  { id: uuidv4(), district: "Rourkela", location: "jhirpani : railway halt", type: "location" },
  { id: uuidv4(), district: "Rourkela", location: "rourkela : railway station", type: "location" },
  { id: uuidv4(), district: "Rourkela", location: "rourkela : airport", type: "location" },

  { id: uuidv4(), district: "Bhubaneswar", location: "pokhariput : biju patnaik international airport", type: "location" },
  { id: uuidv4(), district: "Bhubaneswar", location: "saheed nagar : esplanade mall", type: "location" },

  { id: uuidv4(), district: "Cuttack", location: "badambadi : bus stand", type: "location" },
  { id: uuidv4(), district: "Cuttack", location: "barabati : stadium", type: "location" },

  { id: uuidv4(), district: "Sambalpur", location: "khetrajpur : railway station", type: "location" },

  { id: uuidv4(), district: "Jharsuguda", location: "durlaga : vss airport", type: "location" },

  { id: uuidv4(), district: "Puri", location: "bada danda : jagannath temple", type: "location" },

  { id: uuidv4(), district: "Balasore", location: "fm college road : railway station", type: "location" },

  { id: uuidv4(), district: "Berhampur", location: "berhampur : railway station", type: "location" },

  { id: uuidv4(), district: "Angul", location: "nalco nagar : township", type: "location" },

  { id: uuidv4(), district: "Keonjhar", location: "jhanda bazar : market", type: "location" },


    //cars


    //alto
    { id: uuidv4(), model: 'Alto 800', variant: 'manual', type: 'car' , brand:'maruthi' },
    { id: uuidv4(), model: 'Alto 800', variant: 'automatic', type: 'car' , brand:'maruthi' },
    { id: uuidv4(), model: 'SKODA SLAVIA PETROL AT', variant: 'automatic', type: 'car' , brand:'maruthi' },
    { id: uuidv4(), model: 'NISSAN MAGNITE PETROL MT', variant: 'manual', type: 'car' , brand:'nissan' },
    { id: uuidv4(), model: 'SKODA KUSHAQ Petrol MT', variant: 'manual', type: 'car' , brand:'skoda' },
    { id: uuidv4(), model: 'SKODA KUSHAQ Petrol AT', variant: 'automatic', type: 'car' , brand:'skoda' },
    { id: uuidv4(), model: 'MG HECTOR Petrol MT', variant: 'manual', type: 'car' , brand:'mg' },
    { id: uuidv4(), model: 'MG HECTOR Petrol AT', variant: 'automatic', type: 'car' , brand:'mg' },
    { id: uuidv4(), model: 'MG HECTOR Diesel MT', variant: 'manual', type: 'car' , brand:'mg' },
    { id: uuidv4(), model: 'NISSAN TERRANO Diesel MT', variant: 'manual', type: 'car' , brand:'nissan' },
    { id: uuidv4(), model: 'NISSAN KICKS Petrol MT', variant: 'manual', type: 'car' , brand:'nissan' },
    { id: uuidv4(), model: 'NISSAN KICKS Petrol AT', variant: 'manual', type: 'car' , brand:'nissan' },
    { id: uuidv4(), model: 'VW TAIGUN Petrol MT', variant: 'manual', type: 'car' , brand:'volkswagen' },
    { id: uuidv4(), model: 'NISSAN MAGNITE Petrol MT', variant: 'manual', type: 'car' , brand:'nissan' },
    { id: uuidv4(), model: 'HYUNDAI ALCAZAR Diesel AT', variant: 'automatic', type: 'car' , brand:'hyundai' },
    { id: uuidv4(), model: 'CITROEN C3 Petrol MT', variant: 'automatic', type: 'car' , brand:'citroen' },
    { id: uuidv4(), model: 'ISUZU MUX Diesel AT', variant: 'automatic', type: 'car' , brand:'isuzu' },
    { id: uuidv4(), model: 'MG HECTOR PLUS Petrol MT', variant: 'manual', type: 'car' , brand:'mg' },
    { id: uuidv4(), model: 'MG HECTOR PLUS Petrol AT', variant: 'automatic', type: 'car' , brand:'mg' },
    { id: uuidv4(), model: 'MG HECTOR PLUS Diesel MT', variant: 'manual', type: 'car' , brand:'mg' },


    { id: uuidv4(), model: 'MARUTI SWIFT Petrol AT', variant: 'automatic', type: 'car' , brand:'maruthi' },
    { id: uuidv4(), model: 'DATSUN REDI GO Petrol MT', variant: 'manual', type: 'car' , brand:'DATSUN' },
    { id: uuidv4(), model: 'DATSUN REDI GO Petrol AT', variant: 'automatic', type: 'car' , brand:'DATSUN' },
    { id: uuidv4(), model: 'NISSAN MICRA Petrol MT', variant: 'automatic', type: 'car' , brand:'NISSAN' },
    { id: uuidv4(), model: 'VW AMEO Diesel MT', variant: 'manual', type: 'car' , brand:'volkswagen' },
    { id: uuidv4(), model: 'SKODA RAPID Petrol MT', variant: 'manual', type: 'car' , brand:'skoda' },
    { id: uuidv4(), model: 'MARUTI DZIRE Petrol MT', variant: 'manual', type: 'car' , brand:'maruthi' },
    { id: uuidv4(), model: 'VW VENTO Petrol MT', variant: 'manual', type: 'car' , brand:'volkswagen' },
    { id: uuidv4(), model: 'VW VENTO Petrol AT', variant: 'automatic', type: 'car' , brand:'volkswagen' },
    { id: uuidv4(), model: 'VW VENTO Diesel AT', variant: 'automatic', type: 'car' , brand:'volkswagen' },
    { id: uuidv4(), model: 'VW POLO Petrol MT', variant: 'manual', type: 'car' , brand:'volkswagen' },
    { id: uuidv4(), model: 'VW POLO Petrol AT', variant: 'automatic', type: 'car' , brand:'volkswagen' },
    { id: uuidv4(), model: 'VW POLO Diesel MT', variant: 'manual', type: 'car' , brand:'volkswagen' },
    

    

  ];
  
  // Function to insert dummy data into the database
 export  async function insertDummyData() {
    try {
        // Insert the dummy data into the collection
        await MasterData.insertMany(dummyData);
        console.log('Dummy data inserted successfully.');
    } catch (error) {
        console.error('Error inserting dummy data:', error);
    }
    finally{
        mongoose.disconnect();
    }
  }

//app product modal data fetching from db
  export const getCarModelData = async (req,res,next)=> {
    try{
            const availableVehicleModels  = await MasterData.find()
            if(!availableVehicleModels){
                return next(errorHandler(404,"no model found"))
            }
            res.status(201).json(availableVehicleModels)
    }
    catch(error){
        next(errorHandler(500,{'could not get model Data':error}))
    }
  }
  

  


