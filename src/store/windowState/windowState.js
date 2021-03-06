import { REMOVE_UPLOADED_FILE } from '../../../shared/store/sharedState';

const initialState = {
    uploadedFiles: {
        currentSelectedUploadFile: undefined,
    }
}

export const SET_CURRENT_SELECTED_UPLOAD_FILE = "windowState/SET_CURRENT_SELECTED_UPLOAD_FILE";
export const DOWNLOAD_METADATA_JSON = "windowState/DOWNLOAD_METADATA_JSON";

export const selectors = {
    getCurrentSelectedUploadedFileSelector: state => state.windowState.uploadedFiles.currentSelectedUploadFile,
}

export default function reducer (state=initialState, action) {
    switch (action.type) {
        case (SET_CURRENT_SELECTED_UPLOAD_FILE): {
            const filename = action.payload;
            return {
                ...state,
                uploadedFiles: {
                    currentSelectedUploadFile: filename,
                }
            };
        }
        case (REMOVE_UPLOADED_FILE): {
            return {
                ...state,
                uploadedFiles: {
                    currentSelectedUploadFile: action.payload === state.uploadedFiles.currentSelectedUploadFile ? null : state.uploadedFiles.currentSelectedUploadFile
                }
            }
        }
        default: {
            return state;
        }
    }
}

export const actions = {
    setCurrentSelectedUploadedFile: filename => ({
        type: SET_CURRENT_SELECTED_UPLOAD_FILE,
        payload: filename,
    }),
    downloadMetadataJson: jsonData => ({
        type: DOWNLOAD_METADATA_JSON,
        payload: jsonData,
    })
}
