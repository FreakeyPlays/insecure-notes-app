import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateNoteDto, UpdateNoteDto } from './dto';
import { NotesService } from './notes.service';

@Controller('note')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Post()
  createNote(@Body() dto: CreateNoteDto) {
    return this.notesService.createNote(dto);
  }

  @Get('/:id')
  getNoteById(@Param('id') id: number) {
    return this.notesService.getNoteById(id);
  }

  @Get('/user/:id')
  getAllNotesOfUser(@Param('id') id: number) {
    return this.notesService.getAllNotesOfUser(id);
  }

  @Put()
  updateNote(@Body() dto: UpdateNoteDto) {
    return this.notesService.updateNote(dto);
  }

  @Delete('/:id')
  deleteNoteById(@Param('id') id: number) {
    return this.notesService.deleteNote(id);
  }
}
