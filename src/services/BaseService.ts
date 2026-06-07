export abstract class BaseService {
    public readonly serviceName: string;

    constructor(serviceName: string) {
        this.serviceName = serviceName;
    }

    public registrarEvento(mensagem: string): void {
        console.log(`[${this.serviceName} | ${new Date().toLocaleTimeString()}] ${mensagem}`);
    }
}