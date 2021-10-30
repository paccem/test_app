import { db } from '../index.js'

export const getProfiles = async (req, res) => {
    try {
        const profiles = await db.fetch()
        console.log(profiles);
        res.status(200).json(profiles)
    } catch (error) {
        res.status(404).json({message: error})
    }
}

export const createProfile = async (req, res) => {
    const profile = req.body;
    
    try {
        await db.put(profile)
        res.status(201).json(profile)
    } catch (error) {
        res.status(409).json({message: error})
    }
} 