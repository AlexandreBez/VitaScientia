/**
 * Interface para request do backend
 * @author Lucas Alexandre
 */
export interface Auth {
  /**
   * token
   */
  token: string;
  /**
   * expiration date
   */
  expiration: string;
}
