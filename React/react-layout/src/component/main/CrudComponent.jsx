import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CrudComponent = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://example.com/api/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreate = async () => {
    try {
      await axios.post('https://example.com/api/data', formData);
      fetchData();
      setFormData({ id: '', name: '', email: '' });
    } catch (error) {
      console.error('Error creating data:', error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`https://example.com/api/data/${id}`, formData);
      fetchData();
      setFormData({ id: '', name: '', email: '' });
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://example.com/api/data/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      <h1>CRUD Operations with Axios</h1>
      <form>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
        <button type="button" onClick={handleCreate}>Create</button>
      </form>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{item.email}</span>
            <button type="button" onClick={() => handleUpdate(item.id)}>Update</button>
            <button type="button" onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudComponent;
