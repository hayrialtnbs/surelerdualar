import { observable, action, makeObservable } from 'mobx';
import GlobalServices from '../Services';

class GlobalStore {
    quranList = [];
    surahDetail = {}
    Loading = false
    Status = 0

    constructor() {
        makeObservable(this, {
            quranList: observable,
            surahDetail: observable,
            Loading: observable,
            Status: observable,
            setStatus: action,
            getQuranList: action,
            setQuranList: action,
            setLoading: action,
            setSurehDetail: action
        })
    }


    setQuranList(data) {
        this.quranList = data
    }
    setLoading(value) {
        this.Loading = value
    }
    setStatus(value) {

        this.Status = value
    }
    setSurehDetail(value) {
        console.log('state verisi atanıyor ', value?.name);
        this.surahDetail = value
    }

    getQuranList = async () => {
        this.setLoading(true)
        this.setQuranList([])
        return await GlobalServices.getQuranList()
            .then(response => {
                this.setQuranList(response.data.data)
                this.setStatus(response.status)
            })
            .catch(err => {
                this.setStatus(err.response.status)
            }).finally(() => this.setLoading(false))
    }


    loadSurahDetail = async (surahId) => {
        this.surahDetail = {}
        this.setLoading(true)
        return await GlobalServices.getSurahDetail(surahId)
            .then(response => {
                console.log('response alındı sıkıntı yok');
                this.setSurehDetail(response.data.data);
            }).catch(err => {
                this.setStatus(err?.response?.status)
                console.log('response alınamadı sıkıntı var');

            })
            .finally(() => {
                this.setLoading(false)
                console.log('response tamamlandı');

            })
    }

}
export default new GlobalStore()