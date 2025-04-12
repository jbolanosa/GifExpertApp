import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    const onAddCategory = (newCategory) => {
        setCategories([newCategory, ...categories]);
    }

    
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={onAddCategory} />
            <ol>
                {categories.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
        </>
    )
}


export default GifExpertApp;