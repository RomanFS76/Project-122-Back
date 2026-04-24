import { Diary } from '../models/Diary.js';
import createHttpError from 'http-errors';

export const createDiary = async (req, res, next) => {
  try {
    const { title, description, date, emotions } = req.body;
    const userId = req.user.id; // assuming JWT payload has id

    const newDiary = new Diary({
      user: userId,
      title,
      description,
      date: date || new Date(),
      emotions,
    });

    await newDiary.save();
    res.status(201).json(newDiary);
  } catch (error) {
    next(error);
  }
};

export const getDiaries = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const diaries = await Diary.find({ user: userId }).sort({ date: -1 });
    res.json(diaries);
  } catch (error) {
    next(error);
  }
};

export const getDiaryById = async (req, res, next) => {
  try {
    const { diaryId } = req.params;
    const userId = req.user.id;

    const diary = await Diary.findOne({ _id: diaryId, user: userId });
    if (!diary) {
      return next(createHttpError(404, 'Diary not found'));
    }
    res.json(diary);
  } catch (error) {
    next(error);
  }
};

export const updateDiary = async (req, res, next) => {
  try {
    const { diaryId } = req.params;
    const userId = req.user.id;
    const updates = req.body;

    const diary = await Diary.findOneAndUpdate(
      { _id: diaryId, user: userId },
      updates,
      { new: true, runValidators: true }
    );

    if (!diary) {
      return next(createHttpError(404, 'Diary not found'));
    }
    res.json(diary);
  } catch (error) {
    next(error);
  }
};

export const deleteDiary = async (req, res, next) => {
  try {
    const { diaryId } = req.params;
    const userId = req.user.id;

    const diary = await Diary.findOneAndDelete({ _id: diaryId, user: userId });
    if (!diary) {
      return next(createHttpError(404, 'Diary not found'));
    }
    res.json({ message: 'Diary deleted successfully' });
  } catch (error) {
    next(error);
  }
};
