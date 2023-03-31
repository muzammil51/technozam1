import axios from 'axios'

const REPORT_BASE_REST_API_URL = 'http://localhost:8080/api/v1/reports';

class ReportService{

    getAllReports(){
        return axios.get(REPORT_BASE_REST_API_URL)
    }

    createReport(report){
        return axios.post(REPORT_BASE_REST_API_URL, report)
    }

    getReportById(reportId){
        return axios.get(REPORT_BASE_REST_API_URL + '/' + reportId);
    }

    updateReport(reportId, report){
        return axios.put(REPORT_BASE_REST_API_URL + '/' +reportId, report);
    }

    deleteReport(reportId){
        return axios.delete(REPORT_BASE_REST_API_URL + '/' + reportId);
    }
}

export default new ReportService();