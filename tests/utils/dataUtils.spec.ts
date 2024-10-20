import { formatDate } from '../../src/utils/dataUtils';

describe('formatDate', () => {
    it('should format the date correctly', () => {
        const fixedDate = new Date(2024, 9, 20);

        const formattedDate = formatDate(fixedDate);
        expect(formattedDate).toBe('20 de outubro de 2024');
    });
});
