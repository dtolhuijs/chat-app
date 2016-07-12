import BaseModel from './BaseModel';

class MessageModel extends BaseModel {
  defaults() {
    return {
      username: null,
      text: null,
      createdAt: newDate(),
      updatedAt: newDate()
    };
  }

  constructor() {
   super('message');
 }
}

export default MessageModel;
