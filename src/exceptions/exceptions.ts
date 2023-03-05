import { ApiExceptions } from '~/domain/execptions';

class Exception implements ApiExceptions {
    constructor(readonly error: string, readonly status: number) {
    }
}

export class NotFoundException extends Exception {
    constructor(error: string) {
        super(error, 404);
    }
}

export class BadRequestException extends Exception {
    constructor(error: string) {
        super(error, 400);
    }
}