// When you have actual link for api call, call with axios
//import axios from 'axios';

export const getFeatureToggle = () => {
    return new Promise((resolve, reject) => {
        try {
            // Call get api using axios to fetch response    
            // const result =  axios.get('htttps://myserver.com/toggle');
            // if (result.status === 200) {
            //     resolve{ { isFeedbackButtonEnabled: true } };
            // }
            // resolve{ { isFeedbackButtonEnabled: false } };

            setTimeout(resolve, 500, { isFeedbackButtonEnabled: true });

        } catch (err) {
            reject(err)
        }
    })
}