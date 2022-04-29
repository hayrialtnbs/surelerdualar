import axios from 'axios';
import { API_URL } from '../Utils/ApiUrls';

class GlobalServices {
    async getQuranList() {
        // https://api.acikkuran.com/surahs
        const url = `${API_URL}/surahs`
        return await axios.get(url)
    }
    async getSurahDetail(surahId) {
        // https://api.acikkuran.com/surah/6
        const url = `${API_URL}/surah/${surahId}`
        return await axios.get(url)
    }
}
export default new GlobalServices()