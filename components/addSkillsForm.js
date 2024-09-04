import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { addUserSkills } from '../services/userService';

const AddSkillsForm = () => {
    const [skills, setSkills] = useState([]);
    const [skillName, setSkillName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const { user } = useContext(AuthContext);

    const handleAddSkill = () => {
    setSkills([...skills, { skillName, description, price: Number(price) }]);
    setSkillName('');
    setDescription('');
    setPrice('');
    };

    const handleSubmit = async (event) => {
    event.preventDefault();
        try {
            await addUserSkills(user._id, skills);
        alert('Skills added successfully');
        } catch (error) {
            console.error('Error adding skills:', error);
            alert('Error adding skills');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Skill Name:</label>
                <input
                    type="text"
                    value={skillName}
                    onChange={(e) => setSkillName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label>Price (in tokens):</label>
                <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                />
            </div>
            <button type="button" onClick={handleAddSkill}>Add Skill</button>
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddSkillsForm;