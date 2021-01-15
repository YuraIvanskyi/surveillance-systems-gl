import { v4 as uuid } from 'uuid';
import { database } from '../main';

export function createService(service) {
  const services = database.ref('services/');
  if (service === undefined) {
    throw new Error('No service body provided!');
  } else if (service.name === ''
            || service.project === ''
            || service.platform === '') {
    throw new Error('Missing arguments in service body!');
  } else {
    services.child(`${service.project}_${service.platform}_${service.name}`.toLowerCase()).update({
      name: service.name,
      platform: service.platform,
      project: service.project,
      status: 'New',
      rythm: service.rythm === undefined ? 'None' : service.rythm,
      uid: uuid(),
    });
  }
}
export function deleteService(serviceUid) {
  const services = database.ref('services/');
  if (serviceUid === undefined) {
    throw new Error('No uid provided, service delete call failed!');
  }
  services.once('value').then((snapshot) => {
    const data = snapshot.val();
    Object.keys(data).forEach((nodeId) => {
      if (data[nodeId].uid === serviceUid) {
        services.child(nodeId).remove();
      }
    });
  });
}

export function editService(update) {
  const services = database.ref('services/');
  if (update === undefined) {
    throw new Error('No update provided, service edit call failed!');
  }
  if (update.uid === undefined) {
    throw new Error('No update uid provided, service edit call failed!');
  }
  services.once('value').then((snapshot) => {
    const data = snapshot.val();
    Object.keys(data).forEach((nodeId) => {
      if (data[nodeId].uid === update.uid) {
        services.child(nodeId).update(update);
      }
    });
  });
}
