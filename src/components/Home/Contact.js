import React from 'react';
import Title from '../Globals/Title';

export default function Contact() {
    return (
        <section className="contact py-5">
            <Title title="Get in touch" />
            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 mx-auto">
                    <form action="https://formspree.io/blackmore_p@hotmail.com" method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="name" 
                                id="name"
                                placeholder="Enter name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="email" 
                                id="email"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea  
                                className="form-control" 
                                name="description" 
                                id="description"
                                rows="5"
                                placeholder="What do you want to say..."
                            />
                        </div>
                        <button 
                            type="submit"
                            className="btn btn-outline-dark"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
