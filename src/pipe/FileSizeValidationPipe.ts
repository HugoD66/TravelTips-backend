import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class FileSizeValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const maxSize = 200000;
    if (value.size > maxSize) {
      throw new BadRequestException(`Taille de l'image trop grande. Max: ${maxSize}`);
    }
    return value;
  }
}
