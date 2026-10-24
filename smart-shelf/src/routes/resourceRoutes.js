const express=require("express")

const router=express.Router();

const {
    getResourcesBySubject
}=require("../controllers/resourceController");

router.get('/:subjectId',getResourcesBySubject);

module.exports=router;