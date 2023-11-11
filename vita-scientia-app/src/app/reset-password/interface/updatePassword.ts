/**
 * Interface para request do backend
 * @author Lucas Alexandre
 */
export interface UpdatePassword {
  /**
   * token
   */
  token: string;
  /**
   * nova senha
   */
  password: string;
}
