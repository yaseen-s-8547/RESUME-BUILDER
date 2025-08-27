import BASEURL from "./baseuser"
import commonAPI from "./commonAPI"

//addResumeAPI
export const addResumeAPI=(resume)=>{
    return commonAPI("POST",`${BASEURL}\all-resume`,resume)
}
//editResumeAPI
//addHistoryAPI
//getHistoryAPI
//deleteHistoryAPI