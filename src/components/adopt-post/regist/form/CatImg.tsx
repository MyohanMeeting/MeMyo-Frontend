import { memo, useCallback } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
interface Props{
    id: string;
    url: string;
    image: File;
    handleDelete: (id:string)=>void
}
function CatImg({ id, url, image, handleDelete }: Props) {
    
    const onDelete = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('e', e.currentTarget);
        const { name } = e.currentTarget;
        handleDelete(name)
    }, []);

    return (
        <div className='relative' id={id.toString()} >
            <img src={url} className='md:w-40 md:h-40 w-32 h-32' id={image.name} />
            <button className='absolute top-1 right-1 w-4 h-4' onClick={onDelete} name={image.name}>
                <AiFillCloseCircle size={20} />
            </button>
        </div>
    );
}
export default memo(CatImg); 

