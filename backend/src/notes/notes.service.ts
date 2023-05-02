import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { CreateNoteDto, UpdateNoteDto } from './dto';
import { Note } from './entities/note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note) private noteRepository: Repository<Note>,
  ) {}

  createNote(dto: CreateNoteDto) {
    const user = new User();
    user.id = dto.userId;

    return this.noteRepository.save({ ...dto, user });
  }

  getAllNotesOfUser(id: number) {
    return this.noteRepository.find({
      relations: ['user'],
      where: { user: { id } },
    });
  }

  getNoteById(id: number) {
    return this.noteRepository.findOneBy({ id });
  }

  deleteNote(id: number) {
    return this.noteRepository.delete({ id });
  }

  updateNote(dto: UpdateNoteDto) {
    return this.noteRepository.save(dto);
  }
}
