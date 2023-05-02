import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateNoteDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  text?: string;

  @IsNumber()
  @IsNotEmpty()
  id: number;
}
