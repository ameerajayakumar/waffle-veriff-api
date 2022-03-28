const faker = require('faker');

export const createRandomFullName = async () => {
  return faker.name.firstName() + ' ' + faker.name.lastName();
};

export const createRandomAdditionalData = async () => {
  return { isTest: false };
};

export const createInvalidDataSet = async () => {
  return {
    full_name: await createRandomFullName(),
    lang: '00',
    document_country: '12',
    document_type: 'POster',
  };
};

export const createValidDataSet = async () => {
  return {
    full_name: await createRandomFullName(),
    additionalData: await createRandomAdditionalData(),
    document_country: 'BH',
    document_type: 'PASSPORT',
    lang: 'en',
  };
};

export const createDefaultDataSet = async () => {
  return {
    full_name: await createRandomFullName(),
    additionalData: await createRandomAdditionalData(),
  };
};

export const createEmptyDataSet = async () => {
return {
  full_name: '',
  additionalData: '',
};
}