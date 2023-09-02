import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import CatImg from './CatImg';
import { AdoptPostContext, UploadCatImg } from '@/context/AdoptFormContext';



function AdoptUploadCatPic() {
    const [catImage, setCatImage] = useState<Array<File>>([]);
    const [urlArr, setUrlArr] = useState<Array<object>>([]);

    const { dispatch } = useContext(AdoptPostContext);
    
    const visibleUrls = useMemo(() => urlArr,[urlArr]);
    const visibleCatImages = useMemo(() => catImage, [catImage]);
    

    const addEventListener = useCallback((fileReader: FileReader, image: File) => {
        const preview = document.getElementById('preview') as HTMLDivElement;
        fileReader.addEventListener('load', (event) => {
            if (event.type === 'load' && preview) {
                if (fileReader == null) return;
                const url = window.URL.createObjectURL(image);
               
                setUrlArr(prev => {
                    const objArr = [...prev];
                    objArr.push({[image.name] : url})
                    return objArr;
                })
               
                
            }
        })
    }, []);

    const removeFile = useCallback((id: string) => {
        
        if (id == null) return;
        setCatImage(catImage.filter((img) => img.name != id));
        setUrlArr(urlArr.filter((url) => !Object.keys(url).includes(id)))
    }, [visibleCatImages]);

    useEffect(() => {
        visibleCatImages?.forEach((image) => {
            const imageElem = document.getElementById(image.name);
            if (imageElem) return;
            const fileReader = new FileReader();
            fileReader.readAsDataURL(image);
            addEventListener(fileReader, image);
        });
        dispatch(UploadCatImg(visibleCatImages));
    },[visibleCatImages]);

    


    const onFileUpdate = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('e', e);
        const files = e.target.files;
        if (!files) return;
        setCatImage(prev => ([...prev as File[], ...files]));
    },[])
    const onFileDrag = useCallback((e: React.DragEvent<HTMLInputElement>) => {
        e.stopPropagation();
        e.preventDefault();
    },[])

    const onFileDragUpdate = useCallback((e: React.DragEvent<HTMLInputElement>) => {
        e.stopPropagation();
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (!files) return;
        setCatImage(prev => ([...prev as File[], ...files]))
        console.log('catImage', catImage);
    },[])

    const onFileDragOver = useCallback((e: React.DragEvent<HTMLInputElement>) => {
        e.stopPropagation();
        e.preventDefault();
    },[])

    return (
        <>
        <div className='w-full lg:h-screen h-auto md:mb-0 mb-20'  >
                <h3 className="text-center font-bold mb-2">유기묘 사진</h3>
                <div className="w-full" onDrop={onFileDragUpdate} onDragEnter={onFileDrag} onDragOver={onFileDragOver}>
                <label form="cat-image" className='md:w-3/5 w-full p-2 h-20'>
                        <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full md:h-auto h-full bg-gray-100 hover:bg-gray-200">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">사진을 업로드 해주세요</p>
                        </div>
                    <input id="cat-image" type="file" className="hidden" onChange={onFileUpdate}  multiple />
                </label>
                </div>    
            {visibleCatImages.length > 0 &&
                (<div className='flex text-sm gap-3 flex-wrap bg-gray-100 p-2'>
                    <div id="preview" className='w-full h-full grid grid-cols-3 gap-1'>
                        {visibleUrls.length > 0 && visibleUrls.map((url, i) => (<CatImg url={Object.values(url)[0]} image={visibleCatImages[i]} key={i} id={Object.keys(url)[0]} handleDelete={removeFile} />))}
                    </div>    
                </div>)
            }
        </div>
            
        </>    
    );
}

export default AdoptUploadCatPic;

