import { v4 as uuid } from 'uuid';
import { database } from '../main';

export function createProject(project) {
  const projects = database.ref('projects/');
  if (project === undefined) {
    throw new Error('No service body provided!');
  } else if (project.name === undefined || project.tag === undefined) {
    throw new Error('Missing arguments in project body!');
  } else {
    projects.push({
      name: project.name,
      tag: project.tag,
      img: project.img === '' ? 'https://www.celoxis.com/cassets/img/pmc/develop-project-charter.png' : project.img,
      color: project.color === undefined ? 'teal' : project.color,
      uid: uuid(),
    });
  }
}
export function deleteProject(projectUid) {
  const projects = database.ref('projects/');
  if (projectUid === undefined) {
    throw new Error('No uid provided, service delete call failed!');
  }
  projects.once('value').then((snapshot) => {
    const data = snapshot.val();
    Object.keys(data).forEach((nodeId) => {
      if (data[nodeId].uid === projectUid) {
        projects.child(nodeId).remove();
      }
    });
  });
}

export function editProject(update) {
  const projects = database.ref('projects/');
  if (update === undefined) {
    throw new Error('No update provided, project edit call failed!');
  }
  if (update.uid === undefined) {
    throw new Error('No update uid provided, project edit call failed!');
  }
  projects.once('value').then((snapshot) => {
    const data = snapshot.val();
    Object.keys(data).forEach((nodeId) => {
      if (data[nodeId].uid === update.uid) {
        projects.child(nodeId).update(update);
      }
    });
  });
}
