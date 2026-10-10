import { announcements } from '../store/announcments.store.js';

/**
 * @typedef {Object} Announcement
 * @property {string} id
 * @property {string} title
 * @property {string} message
 * @property {string} createdAt
 */

export const createAnnouncement = (title, message) => {
  //your code
  const id = crypto.randomUUID()
  const na = {
    id,
    title,
    message,
    createdAt: new Date().toLocaleString()
  }
  announcements.push(na)
return na
};

export const getAnnouncements = () => {
  //your code
 return announcements
}

export const getAnnouncementById = (id) => {
  //your code
  return announcements.find(a => a.id === id) ?? null

}

export const deleteAnnouncement = (id) => {
  //your code
  const ann = getAnnouncementById(id);
  const aid = announcements.indexOf(ann)
  announcements.splice(aid, 1)
  return ann
};
