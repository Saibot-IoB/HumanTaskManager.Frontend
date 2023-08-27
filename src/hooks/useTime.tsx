import { DEFAULT_TIME_SERVER } from '../../config/TimeServerConfig';
import LoggingHandler from '../common/LoggingHandler';

export default function useTime() {
    const getCurrentTime = (): Date | null => {
        const before = Date.now();
        
        fetch(DEFAULT_TIME_SERVER)
            .then((response: Response) => {
                const after = Date.now();
                response.json().then((data) => {
                    const serverTime = new Date(data.utc_datetime).getTime();
            
                    const latency = (after - before) / 2;
                    const adjustedTime =  serverTime + latency;
                    
                    LoggingHandler.info(`Time synced: ${new Date(adjustedTime).toISOString()}`);
                    return new Date(adjustedTime);
                }).catch((error) => {
                    LoggingHandler.error(error);
                });
            })
            .catch((error) => {
                LoggingHandler.error(error);
            });

        return null;
    }
    
    return {
        getCurrentTime
    };    
}
