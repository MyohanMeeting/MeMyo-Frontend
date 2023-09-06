interface Props{
    content: string;
}
function AdoptAgreeCheck({ content }: Props) {
    console.log('content',content)
    return (
       <div>
        <h2 className='font-semibold mb-3'>규정동의</h2>
            <div className='flex flex-col space-y-5'>
            <div className='flex justify-between'>
                <p>반려동물이 자연사할 때까지 곁을 지켜주실 수 있습니까?</p>
                <div className='flex'>
                    <label htmlFor='yes'>예</label>
                    <input id='yes' className='w-6 h-6 bg-gray-400' type="checkbox" />
                    <label htmlFor='no'>아니오</label>
                    <input id='no' className='w-6 h-6 bg-gray-400' type="checkbox" />
                </div>
            </div>
            <div className='flex justify-between'>
                <p>입양하신 후 끝까지 책임지고 키우실 수 있습니까?</p>
                <div className='flex'>
                    <label htmlFor='yes'>예</label>
                    <input id='yes' className='w-6 h-6 bg-gray-400' type="checkbox" />
                    <label htmlFor='no'>아니오</label>
                    <input id='no' className='w-6 h-6 bg-gray-400' type="checkbox" />
                </div>
            </div>
            <div className='flex justify-between'>
                <p>반려동물의 불임 수술 시행에 동의하십니까?</p>
                <div className='flex'>
                    <label htmlFor='yes'>예</label>
                    <input id='yes' className='w-6 h-6 bg-gray-400' type="checkbox" />
                    <label htmlFor='no'>아니오</label>
                    <input id='no' className='w-6 h-6 bg-gray-400' type="checkbox" />
                </div>
            </div>
                <div className='flex justify-between'>
                <p>입양 시 반려동물에 대한 책임의 납부에 동의하십니까?</p>
                <div className='flex'>
                    <label htmlFor='yes'>예</label>
                    <input id='yes' className='w-6 h-6 bg-gray-400' type="checkbox" />
                    <label htmlFor='no'>아니오</label>
                    <input id='no' className='w-6 h-6 bg-gray-400' type="checkbox" />
                </div>
            </div>
        </div>
    </div>
    );
}
export default AdoptAgreeCheck;

