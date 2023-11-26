import { PartialType } from '@nestjs/mapped-types';
import { CreateBlocTenueDto } from './create-bloc-tenue.dto';

export class UpdateBlocTenueDto extends PartialType(CreateBlocTenueDto) {}
