import axios from "axios";

export async function GET(url: string): Promise<any> {
    const response = await axios.get(url);
    return response.data;
}

export async function POST(url: string, data: any): Promise<any> {
    const response = await axios.post(url, data);
    return response.data;
}