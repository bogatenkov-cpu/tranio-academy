export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          name: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          name: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          created_at?: string
          updated_at?: string
        }
      }
      user_progress: {
        Row: {
          id: string
          user_id: string
          country: string
          points: number
          streak: number
          max_streak: number
          exam_count: number
          exam_average: number
          completed_lessons: string[]
          studied_cards: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          country: string
          points?: number
          streak?: number
          max_streak?: number
          exam_count?: number
          exam_average?: number
          completed_lessons?: string[]
          studied_cards?: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          country?: string
          points?: number
          streak?: number
          max_streak?: number
          exam_count?: number
          exam_average?: number
          completed_lessons?: string[]
          studied_cards?: string[]
          created_at?: string
          updated_at?: string
        }
      }
      activities: {
        Row: {
          id: string
          user_id: string
          country: string
          type: string
          title: string
          points: number
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          country: string
          type: string
          title: string
          points: number
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          country?: string
          type?: string
          title?: string
          points?: number
          created_at?: string
        }
      }
      exam_results: {
        Row: {
          id: string
          user_id: string
          country: string
          score: number
          total: number
          percentage: number
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          country: string
          score: number
          total: number
          percentage: number
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          country?: string
          score?: number
          total?: number
          percentage?: number
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
