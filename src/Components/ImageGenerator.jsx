import { useState } from 'react';
import image from '../../public/default.png'
import { useRef } from 'react';

const ImageGenerator = () => {
    let [imageUrl, setImageUrl] = useState('/');
    let inputRef = useRef(null);
    let [loading, setLoading] = useState(false);

    let imageGenerator = async () => {
        if (inputRef.current.value === '') {
            return 0;
        }
        setLoading(true)
        let response = await fetch(
            'https://api.openai.com/v1/images/generations', {
            method: "POST",
            headers: {
                'content-type': "application/json",
                Authorization:
                    `Bearer ${import.meta.env.VITE_OPEN_API_KEY}`,
                "User-Agent": 'Chrome',
            },
            body: JSON.stringify({
                prompt: `${inputRef.current.value}`,
                n: 1,
                size: "512x512",
            }),
        });
        
        let data = await response.json();
        let data_array = data?.data;
        setImageUrl(data_array[0]?.url);
        setLoading(false)
    }

    return (
        <div className='flex flex-col items-center gap-7 min-h-[calc(100vh-80px)] p-2'>
            <div className='text-3xl md:text-5xl font-medium'><span className='text-rose-800 font-bold'>Bongo-AI</span> Image Generator </div>
            <div className='flex flex-col'>
                <div><img className='w-[500px] h-[400px] rounded-xl' src={imageUrl === '/' ? image : imageUrl} alt="" /></div>
                <div>
                    <div className={`${loading ? "" : "hidden"}`}>Loading...</div>
                </div>
            </div>
            <div className='flex w-full p-2 md:w-[800px] h-16 justify-between items-center rounded-[50px] bg-[#1F3540]'>
                <input
                    className='w-[500px] h-12 bg-transparent border-none outline-none text-lg text-white pl-7 mr-7 placeholder:text-[#999]'
                    type="text"
                    ref={inputRef}
                    placeholder='Describe what you want to see' />
                <div
                    onClick={() => imageGenerator()} className='flex items-center justify-center w-[200px] h-16 text-xl rounded-[50px] bg-[#6d35c6] cursor-pointer'>Generate</div>
            </div>
        </div>
    )
}
export default ImageGenerator;