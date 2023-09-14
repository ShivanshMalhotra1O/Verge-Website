import React, { useState } from 'react';
import axios from 'axios';

function Test() {
    const mystyle = {
        height: '100vh',
        color: 'black',
        backgroundColor: 'lightblue',
        padding: '10px',
        fontFamily: 'Arial',
        width: '100vw',
    };

    const [images, setImages] = useState(new Array(42).fill(''));

    function handleImage(e, index) {
        const updatedImages = [...images];
        updatedImages[index] = e.target.files[0];
        setImages(updatedImages);
    }

    function handleApi() {
        const formData = new FormData();

        // Append all selected images to the formData
        images.forEach((image, index) => {
            formData.append(`image${index}`, image);
        });

        axios.post('url', formData).then((res) => {
            console.log(res);
        });
    }

    // Custom labels for each input field
    const customLabels = [
        'Bonnet',
        'Boot Door',
        'Bumper Front',
        'Bumper Rear',
        'Front Door LHS',
        'Front Door RHS',
        'Rear Door LHS',
        'Rear Door RHS',
        'Engine',
        'Exhaust',
        'Fender LHS',
        'Fender RHS',
        'Front Right',
        'Front Main',
        'Front Left',
        'Front with hood open',
        'Front wheel LHS',
        'Front wheel RHS',
        'Headlight LHS ',
        'Headlight RHS ',
        'Interior from Backseat ',
        'Interior from Front LHS ',
        'Interior from Front RHS ',
        'Main Car',
        'Odometer',
        'Orvm LHS',
        'Orvm RHS',
        'Pillar LHS',
        'Pillar RHS',
        'Quarter Panel LHS',
        'Quarter Panel RHS',
        'Rear Boot Open',
        'Rear Left',
        'Rear Right',
        'Rear Main',
        'Rear Wheel LHS',
        'Rear Wheel RHS',
        'Roof Car',
        'Running Border LHS',
        'Running Border RHS',
        'Taillight LHS',
        'Taillight RHS',
        // Add your custom labels here for all 42 input fields
    ];

    return (
        <>
            <div style={mystyle}>
                <h4 className='text-center my-2'>Enter the following details</h4>

                <div className='container mx-6 px-5 my-4'>
                    <div className='row ps-4'>
                        {images.map((_, index) => (
                            <div key={index} className='col-lg-4 my-2'>
                                <b> <label htmlFor={`file${index}`}>{customLabels[index]}</label> </b>
                                <br />
                                <input
                                    type='file'
                                    name={`file${index}`}
                                    id={`file${index}`}
                                    onChange={(e) => handleImage(e, index)}
                                />
                            </div>
                        ))}
                    </div>
                    <div className='row'>
                        <div className='col my-4 text-center'>
                            <button onClick={handleApi}>Submit All Images</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Test;
