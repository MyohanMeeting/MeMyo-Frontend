import { ReactNode, memo, useCallback, useState } from 'react';
import { AdoptDetail } from '@/types/Adopt';
import { useAppSelector } from '@redux/hooks';

interface Props {
  children?: ReactNode;
  handleForm: (value: Partial<Omit<AdoptDetail, 'noticeId'>>) => void;
}
function AdoptPostTheme({ children, handleForm }: Props) {
  const adoptForm = useAppSelector((state) => state.adopt.adoptForm);
  const [title, setTitle] = useState(() => {
    if (adoptForm) return adoptForm.title;
  });
  const [content, setContent] = useState(() => {
    if (adoptForm) return adoptForm.content;
  });
  const handleTheme = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(e: React.ChangeEvent<T>, type: string) => {
      if (type === 'title') {
        setTitle(e.target.value);
        handleForm({ title: e.target.value });
        return;
      }
      if (type === 'content') {
        setContent(e.target.value);

        handleForm({ content: e.target.value });
        return;
      }
    },
    []
  );

  return (
    <>
      <div className="flex w-full mt-10">
        <h2 className="text-lg font-bold font-pretendard">유기묘 공고를 등록합니다</h2>
      </div>
      <div className="p-2 mt-5">
        <h6 className="text-base font-bold">등록한 유기묘 공고의 타이틀과 설명을 입력해주세요</h6>
        <label htmlFor="title" className="block w-full py-2 mt-2 mb-2 text-gray-700">
          타이틀
        </label>
        <input
          id="title"
          className="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-b appearance-none focus:outline-none"
          type="text"
          defaultValue={title}
          onChange={(e) => handleTheme(e, 'title')}
        />
        <label htmlFor="description" className="block py-2 mt-2 text-gray-700">
          설명
        </label>
        <textarea
          id="description"
          rows={4}
          className="h-full resize-none block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          defaultValue={content}
          onChange={(e) => handleTheme(e, 'content')}
        ></textarea>
        {children && children}
      </div>
    </>
  );
}

export default memo(AdoptPostTheme);
