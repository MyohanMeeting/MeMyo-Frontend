import { toast } from 'react-toastify';
import { basicApi } from '@redux/api/axiosConfig';
import {
  getMyAdoption,
  getMyNotice,
  getUserInfo,
  getUserProfileId,
  setUserInfo,
} from '@redux/slice/mypageSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserInfo, UserPassword } from '../../types/Mypage';

const token = localStorage.getItem('access_token');

export const getUserInfoThunk = createAsyncThunk('mypage/getUserInfo', async (_, thunkApi) => {
  try {
    await basicApi({
      method: 'get',
      url: '/v1/member',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((result) => {
      if (result.data) {
        const { data } = result.data;
        if (data) {
          thunkApi.dispatch(getUserInfo(data));
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
});

export const getMyNoticeThunk = createAsyncThunk('mypage/getMyNotice', async (_, thunkApi) => {
  try {
    await basicApi({
      method: 'get',
      url: '/v1/adoption/notices/my',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((result) => {
      if (result.data) {
        const data = result.data.data;
        if (data) {
          thunkApi.dispatch(getMyNotice(data));
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
});

export const getMyAdoptionThunk = createAsyncThunk('mypage/getMyAdoption', async (_, thunkApi) => {
  try {
    await basicApi({
      method: 'get',
      url: '/v1/adoption/applications/my',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((result) => {
      if (result) {
        const data = result.data.data;
        if (data) {
          thunkApi.dispatch(getMyAdoption(data));
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
});

export const updateUserInfoThunk = createAsyncThunk(
  'mypage/setUserinfo',
  async (obj: Partial<UserInfo>, thunkApi) => {
    try {
      await basicApi({
        method: 'patch',
        url: '/v1/member',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          ...obj,
        },
      }).then((res) => {
        if (res.data) {
          const { data } = res.data;
          if (data) {
            thunkApi.dispatch(setUserInfo(data));
            toast('수정되었습니다!');
          }
        }
      });
    } catch (error) {
      toast('프로필 수정에 실패했습니다!');
    }
  }
);

export const deleteUserThunk = createAsyncThunk('mypage/deleteUser', async () => {
  try {
    await basicApi({
      method: 'delete',
      url: '/v1/member',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.data) {
        toast('회원 탈퇴 되었습니다. 그동안 이용해 주셔서 감사합니다.');
      }
    });
  } catch (error) {
    toast('회원탈퇴에 실패했습니다.');
  }
});

export const updateUserPasswordThunk = createAsyncThunk(
  'mypage/updateUserPassword',
  async (obj: UserPassword) => {
    try {
      await basicApi({
        method: 'put',
        url: '/v1/member/password',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { ...obj },
      }).then((res) => {
        if (res.data) {
          toast('비밀번호가 성공적으로 변경되었습니다.');
        }
      });
    } catch (error) {
      toast('비밀번호가 수정에 실패했습니다.');
    }
  }
);

export const postImageToServerThunk = createAsyncThunk(
  'mypage/uploadProfileImage',
  async (files: File[], thunkApi) => {
    console.log('files', files);
    const formData = new FormData();
    formData.append('category', 'PROFILE');
    for (const [_key, value] of Object.entries(files)) {
      formData.append('files', value);
    }
    console.log('폼데이터', formData);
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    };
    try {
      await basicApi({
        method: 'post',
        url: `/v1/files`,
        headers: headers,
        data: formData,
      }).then((result) => {
        console.log('result', result);
        thunkApi.dispatch(getUserProfileId(result.data.data.uploadId[0]));
      });
    } catch (error) {
      toast('업로드에 실패했습니다!');
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  'mypage/updateUserProfile',
  async (profileImageId: number, thunkApi) => {
    try {
      await basicApi({
        method: 'patch',
        url: `/v1/member`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          profileImageId: profileImageId,
        },
      }).then((res) => {
        console.log(res);
        if (res.data) {
          const { data } = res.data;
          if (data) {
            thunkApi.dispatch(setUserInfo(data));
            toast('수정되었습니다!');
          }
        }
      });
    } catch (error) {
      toast('프로필 사진 수정에 실패했습니다.');
    }
  }
);
