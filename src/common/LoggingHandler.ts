/** TODO:
 * Add Remote logging by making a call to the backend API.
 * The backend API will then send the log to Logz.io via the secret token.
 */

export default class LoggingHandler {
    public static info(message: string) {
        console.info(`${new Date().toISOString()}` + message);
        // fetch(`https://listener.logz.io:8071?token=${process.env.LOGZIO_TOKEN}`, {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         message: `${new Date().toISOString()}` + message,
        //         level: 'info',
        //     }),
        // }).then(() => {
        //     // Do nothing
        // });
    }

    public static error(message: string) {
        console.error(`${new Date().toISOString()}` + message);
        // fetch(`https://listener.logz.io:8071?token=${process.env.LOGZIO_TOKEN}`, {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         message: `${new Date().toISOString()}` + message,
        //         level: 'error',
        //     }),
        // }).then(() => {
        //     // Do nothing
        // });
    }
}
