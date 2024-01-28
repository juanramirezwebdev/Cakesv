import { FileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = new FileRoute('/order').createRoute({
  component: OrderComponent,
});

function OrderComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cakeType: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

  };

  return (
    <div className="container mt-5">
      <h2>We will get in touch as soon as possible !</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cakeType" className="form-label">
            Cake Type:
          </label>
          <input
            type="text"
            className="form-control"
            id="cakeType"
            name="cakeType"
            value={formData.cakeType}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn "  style={{ backgroundColor: '#d0bdf4', color: 'white' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default OrderComponent;
