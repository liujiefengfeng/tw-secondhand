import { fromPromise } from 'most';
import { select, Epic } from 'redux-most';

import * as D from '../../definitions';
import { uploadImage } from '../../apis/product';

export const UPLOAD_IMAGE = 'UPLOAD_IMAGE ';
export const UPLOAD_IMAGE_SUC = 'UPLOAD_IMAGE_SUC';
export const UPLOAD_IMAGE_FAIL = 'UPLOAD_IMAGE_FAIL';

export const uploadProductImage =
    (user: D.User, fileData: string): D.UploadImageAction =>
        ({ type: UPLOAD_IMAGE, payload: { user, fileData } });

const uploadProductImageEpic: Epic<D.GeneralAction> = (action$) => action$.thru(select(UPLOAD_IMAGE))
    .chain((action: D.UploadImageAction) =>
        fromPromise(uploadImage(action.payload.user.sessionToken, action.payload.fileData))
    ).map((uploadImageResponse: null | string) => {
        return (
            uploadImageResponse
                ? { type: UPLOAD_IMAGE_SUC, payload: { url: uploadImageResponse } }
                : { type: UPLOAD_IMAGE_FAIL }
        );
    });

export const epics: Array<Epic<D.GeneralAction>> = [
    uploadProductImageEpic,
];