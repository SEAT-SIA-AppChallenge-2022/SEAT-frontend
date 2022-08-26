import { User } from '@/types/User/type';
import ApiService, { ApiData } from '@/api/ApiService';

export default class RecommendationService {
  private static getRecommendationUrl() {
    return 'recommender';
  }

  public static async getRecommendation(user: User): Promise<ApiData> {
    try {
      const response = await ApiService.request({
        url: `${this.getRecommendationUrl()}`,
        method: 'POST',
        data: {
          userid: user.id,
          input_indoorOutdoorScore: user.inOutScore,
          input_leisureThrillScore: user.leisureThrillScore,
          input_cheapExpensiveScore: user.cheapExpScore,
        },
      });
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
