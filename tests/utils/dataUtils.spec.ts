import { formatDate } from '../../src/utils/dataUtils';

describe('formatDate', () => {
    it('should format the date correctly', () => {
        const today = new Date();
        const day = today.getDate();
        const months = [
            'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
            'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
        ];
        const month = months[today.getMonth()];
        const year = today.getFullYear();

        const formattedDate = formatDate();
        expect(formattedDate).toBe(`${day} de ${month} de ${year}`);
    });
});
